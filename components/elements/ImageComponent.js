import { Image } from "native-base";

export const ImageComponent = ({ borderRadius, uri, fallbackUri }) => {
  return (
    <Image
      size="full"
      resizeMode="cover"
      alt="*"
      borderRadius={borderRadius || 0}
      source={{
        uri: uri,
      }}
      fallbackSource={{
        uri: fallbackUri,
      }}
    />
  );
};
