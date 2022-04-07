import { NftTraits } from "./nft-traits";

export interface Nft {
    title: string,
    rfid: string,
    date_t: Date,
    lat: string,
    lon: string,
    image: string,
    ref1: NftTraits,
    breath: NftTraits
}
