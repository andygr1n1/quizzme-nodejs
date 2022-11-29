export const getFlags = () => {
    const flags: string[] = []

    process.argv.forEach(arg => {
        if (/^-/.test(arg)) {
            flags.push(arg.replaceAll('-', ''))
        }
    })

    console.log(flags)

    return flags
}
