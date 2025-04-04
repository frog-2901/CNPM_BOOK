function getErrorRes(err) {
  let code = err.message;
  switch (err.type) {
    default:
      break;
  }
  return {
    signal: 0,
    code: 400,
    message: code,
  };
}

export default getErrorRes;
