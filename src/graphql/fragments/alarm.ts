/**
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const Alarm = {
  variable: "$keyword: String, $scope: Scope, $duration:Duration!, $tags:[AlarmTag], $paging: Pagination!",
  query: `
    getAlarm(keyword: $keyword, scope: $scope, duration: $duration, paging: $paging, tags: $tags) {
      items: msgs {
        key: id
        message
        startTime
        scope
        name
        tags {
          key
          value
        }
        events {
          uuid
          source {
            service serviceInstance endpoint
          }
          name
          type
          message
          parameters {
            key
            value
          }
          startTime
          endTime
        }
        snapshot {
          expression
          metrics {
            name
            results {
              metric {
                labels {
                  key
                  value
                }
              }
              values {
                id
                owner {
                  scope
                  serviceID
                  serviceName
                  normal
                  serviceInstanceID
                  serviceInstanceName
                  endpointID
                  endpointName
                }
                value
                traceID
              }
            }
          }
        }
      }
    }`,
};
export const AlarmTagKeys = {
  variable: "$duration: Duration!",
  query: `
  tagKeys: queryAlarmTagAutocompleteKeys(duration: $duration)`,
};

export const AlarmTagValues = {
  variable: "$tagKey: String!, $duration: Duration!",
  query: `
  tagValues: queryAlarmTagAutocompleteValues(tagKey: $tagKey, duration: $duration)`,
};
