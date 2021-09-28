import { Box, Chip, Grid, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import * as QR from 'avenger/lib/QueryResult';
import { useQueries } from 'avenger/lib/react';
import { pipe } from 'fp-ts/lib/function';
import React from 'react';
import { updateRecommendationForVideo } from '../../API/commands';
import * as queries from '../../API/queries';
import { ErrorBox } from '../common/ErrorBox';
import { LazyFullSizeLoader } from '../common/FullSizeLoader';

export const VideoRecommendations: React.FC = () => {
  return pipe(
    useQueries({
      settings: queries.accountSettings,
      videoRecommendations: queries.currentVideoRecommendations,
    }),
    QR.fold(LazyFullSizeLoader, ErrorBox, ({ settings, videoRecommendations }) => {
      return (
        <Box>
          <Typography variant="h5">Recommendations</Typography>
          {videoRecommendations.map((r, i) => (
            <Grid
              key={i}
              container
              alignItems="center"
              justifyContent="flex-start"
              style={{ marginBottom: 10 }}
            >
              <Grid item md={2}>
                <Chip
                  label={i + 1}
                  variant="outlined"
                  deleteIcon={<DeleteIcon />}
                  onDelete={() =>
                    updateRecommendationForVideo(
                      {
                        videoId: settings.edit?.videoId,
                        creatorId: settings.channelCreatorId,
                        recommendations: videoRecommendations
                          .map((r) => r.urlId)
                          .filter((rr) => rr !== r.urlId),
                      }
                    )()
                  }
                />
              </Grid>
              <Grid item md={10}>
                <p>{r.title}</p>
              </Grid>
            </Grid>
          ))}
        </Box>
      );
    })
  );
};
