/**
 * @description: Define the static resources URL for the project.
 * By default, static resources should be store in a public github repository
 * And CDN provider, like jsdelivr, will cache resources automatically.
 * Whenever resources are updated, one should clear the cache from the CDN provider's website.
 *
 * @description: `cdnBaseUrl` is the base URL of the CDN provider, e.g. https://cdn.jsdelivr.net
 * @description: `fallbackBaseUrl` is the base URL of the original repository, e.g. https://raw.githubusercontent.com
 *
 * @description: NOTE - fallback system is not implemented yet.
 */

const cdnBaseUrl =
  process.env.CDN_BASE_URL || 'https://cdn.jsdelivr.net'
const fallbackBaseUrl =
  process.env.FALLBACK_BASE_URL ||
  'https://raw.githubusercontent.com'

const githubUsername = process.env.GITHUB_USERNAME
const githubRepoName =
  process.env.GITHUB_REPO_NAME || 'assets'
const githubBranch = process.env.GITHUB_BRANCH || 'master'
const githubFilePath =
  process.env.GITHUB_FILE_PATH || 'Frontier'

const staticResourcesCdnUrl = `${cdnBaseUrl}/gh/${githubUsername}/${githubRepoName}/${githubFilePath}`
const staticResourcesFallbackUrl = `${fallbackBaseUrl}/${githubUsername}/${githubRepoName}/refs/heads/${githubBranch}/${githubFilePath}`

export const definitionsUrl = `${staticResourcesCdnUrl}/definitions`
export const definitionsFallbackUrl = `${staticResourcesFallbackUrl}/definitions`
