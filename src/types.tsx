import React from 'react';

export interface Multiplier {
    id: number;
    color: string;
    zeros: number;
}

export interface Tolerance {
    id: number;
    color: string;
    percentage: number;
}

export interface IOhm {
    BandA: number;
    BandB: number;
    BandC: number | undefined;
    BandD: number;
    Tolerance: number;
}