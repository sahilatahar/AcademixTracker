import { Bars } from "react-loader-spinner"

function Loading() {
    return <Bars color="#39E079" width={50} />
}

function LoadingPage() {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-light">
            <Loading />
        </div>
    )
}

function LoadingFullScreen() {
    return (
        <div className="fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-light">
            <Loading />
        </div>
    )
}

export { Loading, LoadingPage, LoadingFullScreen }
