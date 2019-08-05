export class ChartData {
    constructor(
        values: object,
        colorDomains: string[],
        colors: string[]
    ) {
        this.values = values;
        this.colorDomains = colorDomains;
        this.colors = colors;
    }
    values: object;
    colorDomains: string[];
    colors: string[];
}