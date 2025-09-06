enum Color {
    //% block="none"
    //% block.loc.nl="geen"
    None,
    //% block="red"
    //% block.loc.nl="rood"
    Red,
    //% block="green"
    //% block.loc.nl="groen"
    Green,
    //% block="blue"
    //% block.loc.nl="blauw"
    Blue,
    //% block="yellow"
    //% block.loc.nl="geel"
    Yellow,
    //% block="cyan"
    //% block.loc.nl="cyaan"
    Cyan,
    //% block="magenta"
    //% block.loc.nl="magenta"
    Magenta,
    //% block="black"
    //% block.loc.nl="zwart"
    Black,
    //% block="dark grey"
    //% block.loc.nl="donkergrijs"
    DarkGrey,
    //% block="grey"
    //% block.loc.nl="grijs"
    Grey,
    //% block="light grey"
    //% block.loc.nl="lichtgrijs"
    LightGrey,
    //% block="white"
    //% block.loc.nl="wit"
    White,
    //% block="orange"
    //% block.loc.nl="oranje"
    Orange,
    //% block="brown"
    //% block.loc.nl="bruin"
    Brown,
    //% block="pink"
    //% block.loc.nl="roze"
    Pink,
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

namespace RGB {

    function fromColor(color: Color): number {
        let val = 0
        switch (color) {
            case Color.Red: val = 0xFF0000; break;
            case Color.Green: val = 0x00FF00; break;
            case Color.Blue: val = 0x0000FF; break;
            case Color.Yellow: val = 0xFFFF00; break;
            case Color.Cyan: val = 0x00FFFF; break;
            case Color.Magenta: val = 0xFF00FF; break;
            case Color.Black: val = 0x000000; break;
            case Color.DarkGrey: val = 0xA9A9A9; break;
            case Color.Grey: val = 0x808080; break;
            case Color.LightGrey: val = 0xD3D3D3; break;
            case Color.White: val = 0xFFFFFF; break;
            case Color.Orange: val = 0xFFA500; break;
            case Color.Brown: val = 0xA52A2A; break;
            case Color.Pink: val = 0xFFC0CB; break;
            case Color.Indigo: val = 0x4b0082; break;
            case Color.Violet: val = 0x8a2be2; break;
            case Color.Purple: val = 0x800080; break;
        }
        return val
    }

    function fromRgb(red: number, green: number, blue: number): number {
        let rgb = ((red & 0xFF) << 16) | ((green & 0xFF) << 8) | (blue & 0xFF)
        return rgb;
    }
}