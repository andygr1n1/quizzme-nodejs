import { parseArgs } from 'node:util'

export const getFlags = () => {
    const flags: string[] = []

    const options = {
        add: {
            type: 'boolean',
            short: 'a',
        },
    }

    // console.log('parseArgs', parseArgs({ options }))
    process.argv.forEach(arg => {
        if (/^-/.test(arg)) {
            flags.push(arg.replaceAll('-', ''))
        }
    })

    console.log(flags)

    return flags
}

export const addFlagExists = (): boolean => {
    const options = { add: { type: 'boolean' as 'boolean', short: 'a' } }

    const {
        values: { add },
    } = parseArgs({ options })

    return add ?? false
}
