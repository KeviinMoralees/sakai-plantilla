export interface Station {
    idStation:           number;
    name:                string;
    latitude:            number;
    longitude:           number;
    validationDate:      string;
    updateDate:          string;
    observations:        string;
    strobeLightStatus:   boolean;
    reflectorState:      boolean;
    mastState:           boolean;
    stationState:        boolean;
    speakerState:        boolean;
    telemetryTime:       number;
    speakerVolume:       number;
    speakerTypeDto:      SpeakerTypeDto;
    modemTypeDto:        ModemTypeDto;
    solarSystemTypesDto: SolarSystemTypesDto;
}

export interface ModemTypeDto {
    idModemType: number;
    name:        string;
    description: string;
}

export interface SolarSystemTypesDto {
    idSolarSystem: number;
    name:          string;
    description:   string;
}

export interface SpeakerTypeDto {
    idSpeakerType: number;
    name:          string;
    description:   string;
}
