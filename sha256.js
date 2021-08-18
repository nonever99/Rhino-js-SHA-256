const sha256 = (str) => {
    let md = java.security.MessageDigest.getInstance('SHA-256');
    md.update(java.lang.String(str).getBytes('UTF-8'));
    let b = '';
    for (let i of md.digest())
        b += java.lang.Integer.toString((i & 0xff) + 0x100, 16).slice(1);
    return b;
}
