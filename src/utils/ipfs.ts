import axios from 'axios';

export const fetchFromIpfs = async (cid: string): Promise<any> => {
  try {
    const fetchFromPinata = axios.get(
      `${process.env.PINATA_GATEWAY_URL}${cid}?pinataGatewayToken=${process.env.PINATA_GATEWAY_TOKEN}`,
      { timeout: 12000 }
    );
    const res = await Promise.race([fetchFromPinata]);
    return res.status === 200 ? res.data : null;
  } catch (err) {
    return null;
  }
};

export const validateIpfsImage = async (cid: string): Promise<boolean> => {
  try {
    const res = await axios.head(
      `${process.env.PINATA_GATEWAY_URL}${cid}?pinataGatewayToken=${process.env.PINATA_GATEWAY_TOKEN}`,
      { timeout: 7000 }
    );
    return res.headers['content-type']?.startsWith('image/') ?? false;
  } catch (err) {
    return false;
  }
};
