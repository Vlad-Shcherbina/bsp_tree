export default function assert(cond: boolean, message?: string): asserts cond {
    if (!cond) {
        console.trace();
        console.assert(cond, message || 'assert failed');
        throw message || 'assert failed';
    }
}
