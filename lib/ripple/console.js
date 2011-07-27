/*
 *  Copyright 2011 Research In Motion Limited.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _log(msg, method) {
    try {
        console[method](msg);
    } catch (e) {
        // silent
    }
}

module.exports = {
    log: function (msg) {
        _log(msg, "log");
    },

    warn: function (msg) {
        _log(msg, "warn");
    },

    error: function (msg) {
        _log(msg, "error");
    },

    clear: function () {
        console.clear();
    }
};