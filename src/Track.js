class Track {
  loadMeta(meta) {
    for (const key in meta) {
      this[key] = meta[key];
    }
  }
}

export default Track;
