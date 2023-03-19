import truecallerjs from '@types/truecallerjs';

export default function handler(req, res) {
  var nomorCode = req.query.nomorCode
  var countryCode = req.query.countryCode
  var creator = "xzhndvs"


  if (!nomorCode) return res.json(`Input Parameter Nomor`)
  if (!countryCode) return res.json(`Input Parameter Country Code Example ID / MY`)
    var searchData = {
      number: nomorCode,
      countryCode: countryCode,
      installationId: "a1i0N--ZtzzhIk_k_gN90VfTZjxmsTzt_5qiBX6pCXTp4EFfZUkZE6mDb6OlXQXR",
    }
    truecallerjs.searchNumber(searchData).then(data => {
      res.status(200).json({
        creator: `${creator}`,
        status: true,
        result: data
      })
    }).catch(() => {
        res.status(500).json({ error: 'failed to load data' })
    })
}