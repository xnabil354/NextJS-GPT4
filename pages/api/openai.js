export default function handler(req, res) {
    res.status(200).json({
        data: [
            {
                openai_api_key: "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",
                expired: "Lifetime"
            }
        ]
    })
}