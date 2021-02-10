const sha256 = (str) => {
    let md = MessageDigest.getInstance('SHA-256');
    md.update(string(str).getBytes('UTF-8'));
    let b = new buf();
    for (let i of md.digest()) {
        b.append(java.lang.Integer.toString((i & 0xff) + 0x100, 16).slice(1));
    }
    return b;
}