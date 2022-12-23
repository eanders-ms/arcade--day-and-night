interface Image {
    //% helper=imageDrawCircle
    //% blockNamespace="images" inlineInputMode="inline" group="Drawing"
    //% block="draw circle in %picture=variables_get at x %cx y %cy radius %r %c=colorindexpicker"
    drawCircle(cx: number, cy: number, r: number, c: number): void;

    //% helper=fillDrawCircle
    //% blockNamespace="images" inlineInputMode="inline" group="Drawing"
    //% block="fill circle in %picture=variables_get at x %cx y %cy radius %r %c=colorindexpicker"
    fillCircle(cx: number, cy: number, r: number, c: color): void;

    //% helper=imagePrintCenter
    //% blockNamespace="images" inlineInputMode="inline" group="Drawing"
    //% block="print in %picture=variables_get %text row %y %color=colorindexpicker"
    printCenter(text: string, y: number, color: number): void;

}
