
export function StringWithDefault(d) {
    return (s) => {
        if (s == null) return d;
        if (s.length == 0) return d;
        return s;
    }
}