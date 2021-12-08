import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { data } = req.body;
  try {
    const { data: responseData } = await axios({
      method: 'POST',
      url: 'https://api.prosperworks.com/developer_api/v1/leads',
      data,
      headers: {
        'X-PW-AccessToken': process.env.COPPER_ACCESS_TOKEN,
        'X-PW-Application': 'developer_api',
        'X-PW-UserEmail': 'anthony@underbelly.is',
        'Content-Type': 'application/json',
      },
    });

    return res.json(responseData);
  } catch (e) {
    if (e.response) {
      res.status(e.response.status);
      return res.json({ error: e.response.message });
    }

    res.status(500);
    return res.json({ error: 'Error received' });
  }
};
