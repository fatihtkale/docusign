import { WebPlugin } from '@capacitor/core';
export class DocumentScannerWeb extends WebPlugin {
    async scanDocument(options) {
        console.log(options);
        throw this.unimplemented('Not implemented on web.');
    }
}
//# sourceMappingURL=web.js.map