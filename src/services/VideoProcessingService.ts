import { MediaConvertClient, CreateJobCommand, CreateJobCommandInput, OutputGroupType, ContainerType } from "@aws-sdk/client-mediaconvert";

const client = new MediaConvertClient({ region: 'us-east-1' });

export async function processVideo(inputKey: string, outputKeyPrefix: string): Promise<string> {
  const params: CreateJobCommandInput = {
    Role: 'arn:aws:iam::730335659882:role/MediaConvert_Default_Role',
    Settings: {
      Inputs: [
        {
          FileInput: `s3://360-video-storage33f5c-dev/${inputKey}`,
        },
      ],
      OutputGroups: [
        {
          OutputGroupSettings: {
            Type: OutputGroupType.FILE_GROUP_SETTINGS, // Use the correct enum for the OutputGroupSettings.Type
            FileGroupSettings: {
              Destination: `s3://360-video-storage33f5c-dev/${outputKeyPrefix}`,
            },
          },
          Outputs: [
            {
              ContainerSettings: { 
                Container: ContainerType.MP4, // Use the correct enum for Container
              },
              VideoDescription: {
                CodecSettings: {
                  Codec: 'H_264', // Use the correct string for Codec
                  H264Settings: { MaxBitrate: 5000000 },
                },
              },
            },
          ],
        },
      ],
    },
  };

  const command = new CreateJobCommand(params);
  const response = await client.send(command);
  return response.Job!.Id!;
}
