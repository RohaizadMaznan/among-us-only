import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="dark:bg-[#0f172a] dark:text-white text-gray-800 ">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument