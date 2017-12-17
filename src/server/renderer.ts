export default function renderHTML(body: string) {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <title>Hero Role Playing</title>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="robots" content="noindex">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <link rel="icon" href="" type="image/x-icon">
    </head>
    <body>
      <div id="app">${body}</div>
      <script async src="/assets"></script>
    </body>
    </html>
  `;
}