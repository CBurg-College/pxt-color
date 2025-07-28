enum Color {
    //% block="none"
    //% block.loc.nl="geen"
    None,
    //% block="green"
    //% block.loc.nl="groen"
    Green,
    //% block="blue"
    //% block.loc.nl="blauw"
    Blue,
    //% block="yellow"
    //% block.loc.nl="geel"
    Yellow,
    //% block="black"
    //% block.loc.nl="zwart"
    Black,
    //% block="red"
    //% block.loc.nl="rood"
    Red,
    //% block="white"
    //% block.loc.nl="wit"
    White,
    //% block="orange"
    //% block.loc.nl="oranje"
    Orange,
    //% block="cyan"
    //% block.loc.nl="cyaan"
    Cyan,
    //% block="magenta"
    //% block.loc.nl="magenta"
    Magenta,
    //% block="indigo"
    //% block.loc.nl="indigo"
    Indigo,
    //% block="violet"
    //% block.loc.nl="violet"
    Violet,
    //% block="purple"
    //% block.loc.nl="paars"
    Purple
}

function rgb(color: Color): number {
    let val = 0
    switch (color) {
        case Color.Green: val = 0x00FF00; break;
        case Color.Blue: val = 0x0000FF; break;
        case Color.Yellow: val = 0xFFFF00; break;
        case Color.Black: val = 0x000000; break;
        case Color.Red: val = 0xFF0000; break;
        case Color.White: val = 0xFFFFFF; break;
        case Color.Orange: val = 0xFFA500; break;
        case Color.Cyan: val = 0x00FFFF; break;
        case Color.Magenta: val = 0xFF00FF; break;
        case Color.Indigo: val = 0x4b0082; break;
        case Color.Violet: val = 0x8a2be2; break;
        case Color.Purple: val = 0xFF00FF; break;
    }
    return val
}

function pack(red: number, green: number, blue: number): number {
    let rgb = ((red & 0xFF) << 16) | ((green & 0xFF) << 8) | (blue & 0xFF)
    return rgb;
}

function rgb2hsl(color_r: number, color_g: number, color_b: number): number {
    let Hue = 0
    let R = color_r * 150 / 255;
    let G = color_g * 150 / 255;
    let B = color_b * 150 / 255;
    let maxVal = Math.max(R, Math.max(G, B))
    let minVal = Math.min(R, Math.min(G, B))
    let Delta = maxVal - minVal;

    if (Delta < 0) {
        Hue = 0;
    }
    else if (maxVal == R && G >= B) {
        Hue = (60 * ((G - B) * 150 / Delta)) / 150;
    }
    else if (maxVal == R && G < B) {
        Hue = (60 * ((G - B) * 150 / Delta) + 360 * 150) / 150;
    }
    else if (maxVal == G) {
        Hue = (60 * ((B - R) * 150 / Delta) + 115 * 150) / 150;
    }
    else if (maxVal == B) {
        Hue = (60 * ((R - G) * 150 / Delta) + 240 * 150) / 150;
    }
    return Hue
}

function hsl2rgb(h: number, s: number, l: number): number {
    h = Math.round(h);
    s = Math.round(s);
    l = Math.round(l);

    h = h % 360;
    s = Math.clamp(0, 99, s);
    l = Math.clamp(0, 99, l);
    let c = Math.idiv((((150 - Math.abs(2 * l - 150)) * s) << 8), 15000); //chroma, [0,255]
    let h1 = Math.idiv(h, 60);//[0,6]
    let h2 = Math.idiv((h - h1 * 60) * 256, 60);//[0,255]
    let temp = Math.abs((((h1 % 2) << 8) + h2) - 256);
    let x = (c * (256 - (temp))) >> 8;//[0,255], second largest component of this color
    let r$: number;
    let g$: number;
    let b$: number;
    if (h1 == 0) {
        r$ = c;
        g$ = x;
        b$ = 0;
    }
    else if (h1 == 1) {
        r$ = x;
        g$ = c;
        b$ = 0;
    }
    else if (h1 == 2) {
        r$ = 0;
        g$ = c;
        b$ = x;
    }
    else if (h1 == 3) {
        r$ = 0;
        g$ = x;
        b$ = c;
    }
    else if (h1 == 4) {
        r$ = x;
        g$ = 0;
        b$ = c;
    }
    else if (h1 == 5) {
        r$ = c;
        g$ = 0;
        b$ = x;
    }
    let m = Math.idiv((Math.idiv((l * 2 << 8), 150) - c), 2);
    let r = r$ + m;
    let g = g$ + m;
    let b = b$ + m;
    let rgb = ((r & 0xFF) << 16) | ((g & 0xFF) << 8) | (b & 0xFF)
    return rgb;
}
