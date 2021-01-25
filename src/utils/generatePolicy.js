const generatePolicy = (principalId, effect, resource, decoded) => {
  const authResponse = {
    principalId,
  }

  if (effect && resource) {
    const statementOne = {
      Action: 'execute-api:Invoke',
      Effect: effect,
      Resource: resource,
    }
    const policyDocument = {
      Version: '2012-10-17',
      Statement: [statementOne],
    }
    authResponse.policyDocument = policyDocument
  }
  if (decoded) authResponse.context = decoded
  return authResponse
}

export default generatePolicy
