"use client"

interface CustomError {
    error: Error,
    reset: () => void
}

export default function error({ error, reset }: CustomError) {
    return (
        <>
            <h1>{error.message}</h1>
            <button onClick={() => reset()}>
                Try again
            </button>
        </>
    )
}