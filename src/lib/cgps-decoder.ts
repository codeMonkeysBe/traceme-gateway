export class CgpsDecoder {

  constructor() {
  }

  decode(cgps: any) {

    let decoded = {};

    decoded['Imei'] = cgps.GetImei();

    if(cgps.CanGetEventID()) {
      decoded['EventID'] = cgps.GetEventID();
    }
    if(cgps.CanGetAccu()) {
      decoded['Accu'] = cgps.GetAccu();
    }
    if(cgps.CanGetTemperature()) {
      decoded['TemperatureCelcius'] = cgps.GetTemperatureCelcius();
      decoded['TemperatureFahrenheit'] = cgps.GetTemperatureFahrenheit();
    }
    if(cgps.CanGetReset()) {
      decoded['Reset'] = cgps.GetReset();
    }
    if(cgps.CanGetIndex()) {
      decoded['Index'] = cgps.GetIndex();
    }
    if(cgps.CanGetShake()) {
      decoded['Shake'] = cgps.GetShake();
    }
    if(cgps.CanGetVersion()) {
      decoded['Version'] = cgps.GetVersion();
    }
    if(cgps.CanGetRev()) {
      decoded['Rev'] = cgps.GetRev();
    }
    if(cgps.CanGetSettingsError()) {
      decoded['SettingsError'] = cgps.GetSettingsError();
    }
    if(cgps.CanGetSettingsCrc()) {
      decoded['SettingsCrc'] = cgps.GetSettingsCrc();
    }
    if(cgps.CanGetIO()) {
      decoded['IO'] = cgps.GetIO();
    }
    if(cgps.CanGetAdditionalIO()) {
      decoded['AdditionalIO'] = cgps.GetAdditionalIO();
    }
    if(cgps.CanGetMiscStatus()) {
      decoded['MiscStatus'] = cgps.GetMiscStatus();
    }
    if(cgps.CanGetHardwareStatus()) {
      decoded['HardwareStatus'] = cgps.GetHardwareStatus();
    }
    if(cgps.CanGetRestartCause()) {
      decoded['RestartCause'] = cgps.GetRestartCause();
    }
    if(cgps.CanGetCounterTravelledMeters()) {
      decoded['CounterTravelledMeters'] = cgps.GetCounterTravelledMeters();
    }
    if(cgps.CanGetCounterTripMeters()) {
      decoded['CounterTripMeters'] = cgps.GetCounterTripMeters();
    }
    if(cgps.CanGetAnalogInputs()) {
      decoded['AnalogInputs'] = cgps.GetAnalogInputs();
    }
    if(cgps.CanGetAnalogInput5()) {
      decoded['AnalogInput5'] = cgps.GetAnalogInput5();
    }
    if(cgps.CanGetExtraDataSize()) {
      decoded['ExtraDataSize'] = cgps.GetExtraDataSize();
    }
    if(cgps.CanGetPhotoPort()) {
      decoded['PhotoPort'] = cgps.GetPhotoPort();
    }
    if(cgps.CanGetPhotoLogDataSize()) {
      decoded['PhotoLogDataSize'] = cgps.GetPhotoLogDataSize();
    }
    if(cgps.CanGetPhotoLogDataBytes()) {
      decoded['PhotoLogDataBytes'] = cgps.GetPhotoLogDataBytes();
    }
    if(cgps.CanGetPhotoGpsTimeDifference()) {
      decoded['PhotoGpsTimeDifference'] = cgps.GetPhotoGpsTimeDifference();
    }
    if(cgps.CanGetLogDataType()) {
      decoded['LogDataType'] = cgps.GetLogDataType();
    }
    if(cgps.CanGetLogDataSize()) {
      decoded['LogDataSize'] = cgps.GetLogDataSize();
    }
    if(cgps.CanGetLogDataBytes()) {
      decoded['LogDataBytes'] = cgps.GetLogDataBytes();
    }
    if(cgps.CanGetLogDataGpsTimeDifference()) {
      decoded['LogDataGpsTimeDifference'] = cgps.GetLogDataGpsTimeDifference();
    }
    if(cgps.CanGetPortData()) {
      decoded['PortData'] = cgps.GetPortData();
    }
    if(cgps.CanGetIndex()) {
      decoded['Index'] = cgps.GetIndex();
    }
    if(cgps.CanGetIButton()) {
      decoded['IButton'] = cgps.GetIButton();
    }
    if(cgps.CanGetIButtonSerialNumber()) {
      decoded['IButtonSerialNumber'] = cgps.GetIButtonSerialNumber();
    }
    if(cgps.CanGet1WireData()) {
      decoded['1WireData'] = cgps.Get1WireData();
    }
    if(cgps.CanGet1WireDS18B20temperature()) {
      decoded['1WireDS18B20temperature'] = cgps.Get1WireDS18B20temperature();
    }
    if(cgps.CanGetLcdData()) {
      decoded['LcdData'] = cgps.GetLcdData();
    }
    if(cgps.CanGetCustomPositionData()) {
      decoded['CustomPositionData'] = cgps.GetCustomPositionData();
    }
    if(cgps.CanGetAccelerationX()) {
      decoded['AccelerationX'] = cgps.GetAccelerationX();
    }
    if(cgps.CanGetAccelerationY()) {
      decoded['AccelerationY'] = cgps.GetAccelerationY();
    }
    if(cgps.CanGetAccelerationZ()) {
      decoded['AccelerationZ'] = cgps.GetAccelerationZ();
    }
    if(cgps.CanGetLatLongMargin()) {
      decoded['LatLongMargin'] = cgps.GetLatLongMargin();
    }
    if(cgps.CanGetAltitude()) {
      decoded['Altitude'] = cgps.GetAltitude();
    }
    if(cgps.CanGetAltitudeMargin()) {
      decoded['AltitudeMargin'] = cgps.GetAltitudeMargin();
    }
    if(cgps.CanGetSpeed()) {
      decoded['SpeedKPH'] = cgps.GetSpeedKPH();
    }
    if(cgps.CanGetHeading()) {
      decoded['Heading'] = cgps.GetHeading();
    }
    if(cgps.CanGetHDOP()) {
      decoded['HDOP'] = cgps.GetHDOP();
    }
    if(cgps.CanGetView()) {
      decoded['View'] = cgps.GetView();
    }
    if(cgps.CanGetFix()) {
      decoded['Fix'] = cgps.GetFix();
    }
    if(cgps.CanGetMaxDB()) {
      decoded['MaxDB'] = cgps.GetMaxDB();
    }
    if(cgps.CanGetGpsHighestMaxDB()) {
      decoded['GpsHighestMaxDB'] = cgps.GetGpsHighestMaxDB();
    }
    if(cgps.CanGetGpsStatus()) {
      decoded['GpsStatus'] = cgps.GetGpsStatus();
    }
    if(cgps.CanGetGpsFirmwareCrc()) {
      decoded['GpsFirmwareCrc'] = cgps.GetGpsFirmwareCrc();
    }
    if(cgps.CanGetGsmFirmwareCrc()) {
      decoded['GsmFirmwareCrc'] = cgps.GetGsmFirmwareCrc();
    }
    if(cgps.CanGetGsmCGACT()) {
      decoded['GsmCGACT'] = cgps.GetGsmCGACT();
    }
    if(cgps.CanGetGsmCGATT()) {
      decoded['GsmCGATT'] = cgps.GetGsmCGATT();
    }
    if(cgps.CanGetGsmCREG()) {
      decoded['GsmCREG'] = cgps.GetGsmCREG();
    }
    if(cgps.CanGetFstr()) {
      decoded['Fstr'] = cgps.GetFstr();
    }
    if(cgps.CanGetIMSI()) {
      decoded['IMSI'] = cgps.GetIMSI();
    }
    if(cgps.CanGetGsmNetworkID()) {
      decoded['GsmNetworkID'] = cgps.GetGsmNetworkID();
    }
    if(cgps.CanGetSimPin()) {
      decoded['SimPin'] = cgps.GetSimPin();
    }
    if(cgps.CanGetPhoneNumber()) {
      decoded['PhoneNumber'] = cgps.GetPhoneNumber();
    }
    if(cgps.CanGetHeading()) {
      decoded['Heading'] = cgps.GetHeading();
    }
    if(cgps.CanGetLatLong()) {
      decoded['LatitudeFloat'] = cgps.GetLatitudeFloat();
      decoded['LongitudeFloat'] = cgps.GetLongitudeFloat();
    }
    if(cgps.CanGetFix()) {
      decoded['Fix'] = cgps.GetFix();
    }
    if(cgps.CanGetHDOP()) {
      decoded['HDOP'] = cgps.GetHDOP();
    }
    if(cgps.CanGetAltitude()) {
      decoded['AltitudeMeters'] = cgps.GetAltitudeInMeters();
    }
    if(cgps.CanGetHeading()) {
      decoded['Heading'] = cgps.GetHeading();
    }
    if(cgps.CanGetRev()) {
      decoded['Rev'] = cgps.GetRev();
    }
    if(cgps.CanGetVersion()) {
      decoded['Version'] = cgps.GetVersion();
    }
    if(cgps.CanGetDigTach1Info()) {
      decoded['DigTach1Info'] = cgps.GetDigTach1Info();
    }
    if(cgps.CanGetDigTachData()) {
      decoded['DigTachData'] = cgps.GetDigTachData();
    }
    if(cgps.CanGetFuel()) {
      decoded['Fuel'] = cgps.GetFuel();
    }
    if(cgps.CanGetUserCounter()) {
      decoded['UserCounter'] = cgps.GetUserCounter();
    }
    if(cgps.CanGetPowerUpReason()) {
      decoded['PowerUpReason'] = cgps.GetPowerUpReason();
    }

    return decoded;
  }

}
