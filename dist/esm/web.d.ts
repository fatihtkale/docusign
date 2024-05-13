import { WebPlugin } from '@capacitor/core';
import type { DocumentScannerPlugin, ScanDocumentOptions, ScanDocumentResponse } from './definitions';
export declare class DocumentScannerWeb extends WebPlugin implements DocumentScannerPlugin {
    scanDocument(options?: ScanDocumentOptions): Promise<ScanDocumentResponse>;
}
