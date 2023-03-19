import TiktokDL from '../../controllers/handlers/tiktokDownlaoder';

export default function handler(req, res) {
    let urlTiktok = req.query.urlTiktok
    let creator = 'xzhndvs'

    if (!urlTiktok) return res.status(500).json({ error: 'Input parameter Url Tiktok' })


    TiktokDL(urlTiktok)
        .then((result) => {
            res.status(200).json({
                creator: `${creator}`,
                status: true,
                result: result
            })
        }).catch(()=> {
                res.status(500).json({ error: 'Failed to load data' })
            })
}

