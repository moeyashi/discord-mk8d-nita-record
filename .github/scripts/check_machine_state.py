#!/usr/bin/env python3
"""Fly machine state checker used by CI workflows."""

import argparse
import json
from pathlib import Path


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Validate Fly machine states")
    parser.add_argument("--json-path", required=True, help="Path to machine list JSON")
    parser.add_argument(
        "--mode",
        choices=["pre", "post"],
        required=True,
        help="pre: fail with details, post: return non-zero until recovered",
    )
    return parser.parse_args()


def load_machines(json_path: str) -> list[dict]:
    path = Path(json_path)
    with path.open(encoding="utf-8") as f:
        return json.load(f)


def main() -> int:
    args = parse_args()
    machines = load_machines(args.json_path)

    if not machines:
        if args.mode == "pre":
            raise SystemExit("No machines found before restart")
        return 1

    non_started = [m.get("id") for m in machines if m.get("state") != "started"]

    if not non_started:
        if args.mode == "pre":
            print(f"Pre-check OK: {len(machines)} machine(s) are started")
        return 0

    if args.mode == "pre":
        raise SystemExit(f"Machines not started before restart: {non_started}")

    return 1


if __name__ == "__main__":
    raise SystemExit(main())
