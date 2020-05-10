import React, { useEffect } from "react";
import { Text, Color } from "ink";
import PropTypes from "prop-types";
import { spawn } from "child_process";

const Fallback = ({ args }) => {
  useEffect(() => {
    console.log(`Test spawn`);
    let npm = spawn("npm", args);

    npm.stdout.on("data", function (data) {
      console.log("stdout: " + data.toString());
    });

    npm.stderr.on("data", function (data) {
      console.log("stderr: " + data.toString());
    });

    npm.on("exit", function (code) {
      console.log("child process exited with code " + code.toString());
    });
  }, []);

  return (
    <Text>
      <Color red>Fallback to npm</Color>
    </Text>
  );
};

Fallback.propTypes = {
  args: PropTypes.array,
};

Fallback.defaultProps = {
  args: [],
};

export default Fallback;
