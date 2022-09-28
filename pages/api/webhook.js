/** @format */

export default async function handler(req, res) {
  req = fetch("https://graph.facebook.com/v14.0/101006072791829/messages", {
    method: "POST",
    headers: {
      Authorization:
        "Bearer EAARua4uUNTcBAEr5DGAZABYZChZBdLuvVf05K62jhvYFznaZAAC2ddfl8oMd9QDW0I8QmUJCv7lxv4LiwwmtJKhYybfA1WROoKnO0ejRZCmOxyJZAvlO3y05VEWyDkUydgBUiN6U5ZCZBIq2oSNenJFqlZC05OkgfCFSZA8CLw3wDGMpjoF6EqAE8kUYGqAZCIXKl88PxGyRuG8IDZB7ZCkUZCklgFxd4BerTdOuoZD",
      "Content-Type": "application/json",
    },
    // body: '{ "messaging_product": "whatsapp", "to": "919755992478", "type": "template", "template": { "name": "hello_ujjwal_from_webhook", "language": { "code": "en_US" } } }',
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to: "919755992478",
      type: "template",
      template: {
        name: "hello_world",
        language: {
          code: "en_US",
        },
      },
    }),
  });

  if (req.body != null) {
    res.status(200).json({ message: "success" });
    console.log("success");
  } else {
    res.status(400).json({ message: "failed" });
    console.log("failed");
  }
}
