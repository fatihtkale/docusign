import { registerPlugin } from '@capacitor/core';
const DocumentScanner = registerPlugin('DocumentScanner', {
    web: () => import('./web').then(m => new m.DocumentScannerWeb()),
});
export * from './definitions';
export { DocumentScanner };
//# sourceMappingURL=index.js.map