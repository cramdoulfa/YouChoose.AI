import {
  Button,
  FormControl,
  Grid,
  Input,
  Typography,
} from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import * as QR from 'avenger/lib/QueryResult';
import { useQueries } from 'avenger/lib/react';
import { pipe } from 'fp-ts/lib/function';
import React from 'react';
import { deleteCreatorChannel, saveCreatorChannel } from './API/commands';
import * as queries from './API/queries';
import { ErrorBox } from './components/common/ErrorBox';
import { LazyFullSizeLoader } from './components/common/FullSizeLoader';
import { CreatorVideos } from './components/CreatorVideos';

export const LinkAccount = () => {
  const [channel, setChannel] = React.useState(undefined);

  const inputRef = React.useRef(null);

  const handleChange = (e) => {
    const channelValue = e.target.value;
    // eslint-disable-next-line no-console
    console.log('on change', channelValue);
    setChannel(channelValue || '');
  };

  const onSubmit = (e) => {
    // this handle the pressing of "Enter" key
    if (e.keyCode === 13) {
      saveCreatorChannel(e.target.value)();
    }
  };

  const handleChannelSubmit = () => {
    const channelId = inputRef.current.lastChild.value;
    // eslint-disable-next-line no-console
    console.log({ channelId });
    if (channelId) {
      saveCreatorChannel(channelId, {
        recommendations: {},
        currentVideoOnEdit: {},
      })();
    }
  };

  const handleChannelDelete = () => {
    setChannel(undefined);
    deleteCreatorChannel()();
  };

  return pipe(
    useQueries({ creatorChannel: queries.creatorChannel }),
    QR.fold(LazyFullSizeLoader, ErrorBox, ({ creatorChannel }) => {
      // eslint-disable-next-line no-console
      console.log({ channel, creatorChannel });
      const creatorChannelValue =
        channel !== undefined ? channel : creatorChannel.publicKey;

      return (
        <Grid container>
          <Grid item md={4}>
            <FormControl>
              <InputLabel htmlFor="creator-channel">
                Your Channel name (uno, due)
              </InputLabel>
              <Input
                id="creator-channel"
                ref={inputRef}
                fullWidth={true}
                value={creatorChannelValue || ''}
                onChange={handleChange}
                onKeyDown={onSubmit}
              />
              <Button
                variant="contained"
                color="secondary"
                disabled={!creatorChannelValue}
                onClick={() => handleChannelDelete()}
              >
                Delete
              </Button>

              <Button
                variant="contained"
                color="primary"
                disabled={!creatorChannelValue}
                onClick={handleChannelSubmit}
              >
                Import videos
              </Button>
            </FormControl>
          </Grid>
          <Grid item md={4}>
            <Typography>Channel videos</Typography>
            <CreatorVideos />
          </Grid>
        </Grid>
      );
    })
  );
};
