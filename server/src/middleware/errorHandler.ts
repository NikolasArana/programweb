import { Request, Response, NextFunction } from "express"

interface ErrorConStatus extends Error {
    statusCode?: number
}

export const errorHandler = (
    err: ErrorConStatus,
    req: Request,
    res: Response,
    next: NextFunction

) => {
    console.error(`[error] ${err.message}`)
    const status = err.statusCode || 500
    res.status(status).json({
        success: false,
        error: err.message || 'error interno del server'
    })
}