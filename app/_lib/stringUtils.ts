export function snakeCaseToSentenceCase(input: string): string {
    const formatString = input.charAt(0).toUpperCase() + input.slice(1);
    const tokens = formatString.split('_').join(" ")
    return tokens;
}