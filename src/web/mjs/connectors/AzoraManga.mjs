import WordPressMadara from './templates/WordPressMadara.mjs';

export default class AzoraManga extends WordPressMadara {

    constructor() {
        super();
        super.id = 'azoraworld';
        super.label = 'أزورا مانج (AZORA MANGA)';
        this.tags = [ 'webtoon', 'arabic' ];
        this.url = 'https://azoraworld.com';
    }
}
