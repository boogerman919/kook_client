import NfcManager, {
  NfcTech,
  Ndef,
} from 'react-native-nfc-manager';

const countChar = (strang, c) => {
  var result = 0;
  var i = 0;
  for (i; i < strang.length; i++) {
    if (strang[i] === c) {
      result++;
    }
  }
  return result;
};

// converts seconds into hh:mm:ss form
const timeConverter = time => {
  let h =
    parseInt(time / 3600) >= 10
      ? `${parseInt(time / 3600)}:`
      : `0${parseInt(time / 3600)}:`;
  let m =
    parseInt((time % 3600) / 60) >= 10
      ? `${parseInt((time % 3600) / 60)}:`
      : `0${parseInt((time % 3600) / 60)}:`;
  let s = time % 60 >= 10 ? `${time % 60}` : `0${time % 60}`;
  return h + m + s;
};

const readNdef = async () => {
  let locked = false;
  try {
    // register for the NFC tag with NDEF in it
    await NfcManager.requestTechnology(NfcTech.Ndef);
    // the resolved tag object will contain `ndefMessage` property
    const tag = await NfcManager.getTag();
    let payload = tag.ndefMessage[0].payload;
    let message = '';
    for (let i = 0; i < payload.length; i++) {
      message += String.fromCharCode(payload[i]);
    }
    // TODO: change condition to locked
    if (message.includes("unlock")) {
      locked = true;
    }
  } catch (e) {
    console.log(e.message);
  } finally {
    // stop the nfc scanning
    NfcManager.cancelTechnologyRequest();
  }

  return locked;
};

const writeNdef = async () => {
  let result = false;

  try {
    await NfcManager.requestTechnology(NfcTech.Ndef);

    const bytes = Ndef.encodeMessage([Ndef.textRecord('unlock')]);

    if (bytes) {
      console.log(bytes);
      await NfcManager.ndefHandler
        .writeNdefMessage(bytes);
      result = true;
    }
  } catch (ex) {
  } finally {
    NfcManager.cancelTechnologyRequest();
  }

  return result;
};

module.exports = {
  countChar: countChar,
  timeConverter: timeConverter,
  readNdef: readNdef,
  writeNdef: writeNdef,
};
