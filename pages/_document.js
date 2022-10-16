import Document, { Head, Html, Main, NextScript } from 'next/document'
class MyDocument extends Document {
    render() {
        return (
            <Html className="dark">
                <Head></Head>
                <body className="dark:bg-slate-700">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
export default MyDocument
