export declare function str2bin(str: string): ArrayBuffer;
export declare function bin2str(ab: ArrayBuffer): string;
export declare function b64str2bin(b64str: string): Uint8Array;
export declare function bin2b64str(arrayBuffer: ArrayBuffer): string;
export declare function concat(...buffers: (ArrayBuffer | Uint8Array)[]): ArrayBuffer;
export declare function to4Bytes(x: number): Array<number>;
export declare function from4Bytes(bytes: number[] | ArrayBuffer | Uint8Array): number;
export declare function to2Bytes(x: number): Array<number>;
export declare function from2Bytes(bytes: number[] | ArrayBuffer | Uint8Array): number;
export declare function bin2Hex(arr: ArrayBuffer | Uint8Array): string;
export declare function hex2bin(hex: string): Uint8Array;
export declare function mapError<T>(f: () => T, e: Error): T;
export declare function mapErrorAsync<T>(f: () => Promise<T>, e: Error): Promise<T>;
