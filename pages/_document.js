import Document, {Html, Head, NextScript, Main} from "next/document";

class MyDocument extends Document {
    render() {
        return <Html lang="en">
            <Head>
                <link rel="preload" href="fonts/MPLUSRounded1c-Bold.ttf" as='font' crossOrigin="anonymous"></link>
                <link rel="preload" href="fonts/MPLUSRounded1c-ExtraBold.ttf" as='font' crossOrigin="anonymous"></link>
                <link rel="preload" href="fonts/MPLUSRounded1c-Regular.ttf" as='font' crossOrigin="anonymous"></link>
            </Head>
            <body>
                <Main></Main>
                <NextScript />
            </body>
        </Html>
    }
}

export default MyDocument;