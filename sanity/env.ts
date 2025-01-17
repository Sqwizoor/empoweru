export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-12-03'

export const dataset = assertValue( "production",
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue("v8cu8o3d",
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue("sk0Qdi7SPNyU8ifpbnSLKEEVX1a669pqN1Fk9hajOHRIrAX0DDRBxIpcTHTux8NLQPhbbbt0et9qFYQJuszhroN0P6UFEY1zYBFIHfQock80qEKWgzwNqKMTcF8Z7n6o3dHi10UvJGI8ClM8WEInoemZvTD2jdGYfSWibFPx3qHTDbB2OYii",
  'Missing environment variable: NEXT_PUBLIC_SANITY_TOKEN'
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
