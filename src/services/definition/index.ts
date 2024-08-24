import { Definition, UploaderMessageType } from '@typings/.'
import {
  IRESTfulService,
  ServiceFactory,
} from '@services/.'

export class DefinitionLoader {
  constructor(
    private readonly restService: IRESTfulService,
    private readonly cdnBaseUrl: string,
  ) {}

  async loadDefinition<T>(file: Definition): Promise<T> {
    try {
      const response = await this.restService.get<string>(
        `${this.cdnBaseUrl}/definition.${file}.ts`,
      )

      const match = response.match(
        /=\s*({[\s\S]*})\s*export\s+default/,
      )
      if (!match) {
        throw new Error('Invalid definition file format')
      }

      const definitionJson = new Function(
        `return ${match[1]}`,
      )()
      return definitionJson as T
    } catch (e) {
      console.error(
        `[DefinitionLoader] Failed to load definition: ${file}`,
        e,
      )
      ServiceFactory.createUploader().error(
        UploaderMessageType.LOAD_DEFINITION_ERROR,
        [
          this.constructor.name,
          `Failed to load definition: ${file}`,
          e,
        ],
      )
    }
  }
}
