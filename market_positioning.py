import matplotlib.pyplot as plt
import numpy as np
from matplotlib.patches import Rectangle

# Create figure
plt.figure(figsize=(12, 10))

# Define the axes for the quadrant chart
fig, ax = plt.subplots(figsize=(12, 10))

# Set axis limits
ax.set_xlim(0, 10)
ax.set_ylim(0, 10)

# Add quadrant lines
ax.axhline(y=5, color='gray', linestyle='--', alpha=0.7)
ax.axvline(x=5, color='gray', linestyle='--', alpha=0.7)

# Label the quadrants
ax.text(2.5, 8.5, 'High Security\nLow Customization', ha='center', va='center', fontsize=12, fontweight='bold')
ax.text(7.5, 8.5, 'High Security\nHigh Customization', ha='center', va='center', fontsize=12, fontweight='bold')
ax.text(2.5, 1.5, 'Low Security\nLow Customization', ha='center', va='center', fontsize=12, fontweight='bold')
ax.text(7.5, 1.5, 'Low Security\nHigh Customization', ha='center', va='center', fontsize=12, fontweight='bold')

# Define the market players
players = {
    'SimplAI': (3, 8.5, 'Enterprise-focused\nPrivate Instances', '#4472C4', 250),
    'n8n (Open Source)': (7.5, 3.5, 'Developer-focused\nCommunity Edition', '#70AD47', 200),
    'Activepieces': (6.5, 4.5, 'Semi-open\nHybrid Model', '#5B9BD5', 180),
    'Enterprise iPaaS': (4, 7, 'Traditional\nIntegration Platforms', '#ED7D31', 220),
    'Cloud Providers': (5.5, 6.5, 'Hyperscalers\n(AWS, Azure, GCP)', '#A5A5A5', 230),
    'Custom Scripts': (8.5, 2, 'In-house\nDevelopment', '#FFC000', 170)
}

# Plot each player as a bubble
for player, (x, y, label, color, size) in players.items():
    ax.scatter(x, y, s=size, color=color, alpha=0.7, edgecolors='black')
    ax.annotate(player, (x, y), xytext=(0, 10), textcoords='offset points', 
                ha='center', va='bottom', fontweight='bold')
    ax.annotate(label, (x, y), xytext=(0, -25), textcoords='offset points', 
                ha='center', va='top', fontsize=9)

# Add axis labels
ax.set_xlabel('Customization & Flexibility', fontsize=14, fontweight='bold')
ax.set_ylabel('Security & Enterprise Readiness', fontsize=14, fontweight='bold')

# Remove ticks
ax.set_xticks([])
ax.set_yticks([])

# Add title
plt.suptitle('Market Positioning: AI Automation Tools', fontsize=16, fontweight='bold', y=0.98)

# Add subtitle
plt.title('Comparing SimplAI vs Open-Source and Other Market Players', fontsize=12, y=1.01)

# Add a legend-like explanation
explanation_text = """
Bubble Size: Relative market presence and enterprise adoption
Position: Reflects balance between security/compliance and customization flexibility
"""
props = dict(boxstyle='round', facecolor='white', alpha=0.7)
ax.text(0.02, 0.02, explanation_text, transform=ax.transAxes, fontsize=10,
        verticalalignment='bottom', bbox=props)

# Save the figure
plt.tight_layout()
plt.savefig('/home/ubuntu/visualizations/market_positioning.png', dpi=300, bbox_inches='tight')
plt.close()

print("Market positioning visualization created successfully!")
