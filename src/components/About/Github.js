
import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { useLanguage } from "../../contexts/LanguageContext";

function Github() {
  const { isEnglish } = useLanguage();

  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        {isEnglish ? "My " : "Mi actividad en "}
        <strong className="purple">
          {isEnglish ? "GitHub activity" : "GitHub"}
        </strong>
      </h1>

      <GitHubCalendar
        username="pablo-dz"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={14}
        labels={
          isEnglish
            ? {
                months: [
                  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
                ],
                weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                totalCount: "{{count}} contributions in {{year}}",
                tooltip: "<strong>{{count}} contributions</strong> on {{date}}",
                legend: { less: "Less", more: "More" },
              }
            : {
                months: [
                  "Ene", "Feb", "Mar", "Abr", "May", "Jun",
                  "Jul", "Ago", "Sep", "Oct", "Nov", "Dic",
                ],
                weekdays: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
                totalCount: "{{count}} contribuciones en {{year}}",
                tooltip: "<strong>{{count}} contribuciones</strong> el {{date}}",
                legend: { less: "Menos", more: "Más" },
              }
        }
      />
    </Row>
  );
}

export default Github;
