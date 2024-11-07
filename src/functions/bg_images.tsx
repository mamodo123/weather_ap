import { images } from "../consts/images";

function getBgImage(image: string): any | null {
    const imageFile: any | undefined = images.get(image);
    if (imageFile) {
        return imageFile;
    }
    return null;
}

export function getBgByCondition(condition: number): any {
    var bg;
    switch (condition) {
        case 1000:
            bg = getBgImage('sun'); // Sunny
            break;
        case 1003:
        case 1006:
        case 1009:
        case 1030:
        case 1135:
        case 1147:
            bg = getBgImage('cloud'); // Cloudy, Overcast, Mist, Fog, Freezing fog
            break;
        case 1063:
        case 1150:
        case 1153:
        case 1168:
        case 1171:
        case 1180:
        case 1183:
        case 1186:
        case 1189:
        case 1192:
        case 1195:
        case 1198:
        case 1201:
        case 1240:
        case 1243:
        case 1246:
            bg = getBgImage('rain'); // Various rain types
            break;
        case 1087:
        case 1273:
        case 1276:
            bg = getBgImage('thunder'); // Thunder-related conditions
            break;
        case 1066:
        case 1069:
        case 1114:
        case 1117:
        case 1204:
        case 1207:
        case 1210:
        case 1213:
        case 1216:
        case 1219:
        case 1222:
        case 1225:
        case 1237:
        case 1255:
        case 1258:
        case 1261:
        case 1264:
        case 1279:
        case 1282:
            bg = getBgImage('snow'); // Snow-related conditions
            break;
        default:
            bg = getBgImage('cloud'); // Default to cloudy if condition not matched
    }

    return bg!;
}
