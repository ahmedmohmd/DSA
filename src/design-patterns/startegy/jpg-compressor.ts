import Compressor from "./compressor";

class JpgCompressor implements Compressor {
  compress(fileName: string): void {
    console.log(`Compress (${fileName}) With JPG Compressor...`);
  }
}

export default JpgCompressor;
