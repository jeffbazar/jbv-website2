import matplotlib.pyplot as plt
import numpy as np
from matplotlib.colors import LinearSegmentedColormap

# Create figure and axis
fig, ax = plt.subplots(figsize=(12, 8))

# Hide axes
ax.axis('tight')
ax.axis('off')

# Define the data for the table
categories = [
    'Product Approach',
    'Security & Compliance',
    'AI Model Integration',
    'Technical Requirements',
    'Target Audience',
    'Pricing Model',
    'Customization'
]

simplai_features = [
    'Closed-source, white-glove service with private instances',
    'Enterprise-grade, built-in security and compliance',
    'Point-and-click integration with 300+ services',
    'Minimal DevOps or AI expertise needed',
    'Large enterprises in regulated industries',
    'Premium subscription with managed service',
    'Limited to vendor-provided options'
]

opensource_features = [
    'Open-source with broad community support',
    'Self-configured security, requires manual setup',
    'Developer-oriented API connections',
    'Technical expertise required for setup and maintenance',
    'Developer teams and technical organizations',
    'Free core with paid enterprise features',
    'Deep customization and plugin development'
]

# Create the table data
data = []
for i in range(len(categories)):
    data.append([categories[i], simplai_features[i], opensource_features[i]])

# Create custom colormap (light blue to white)
colors = [(0.9, 0.95, 1), (1, 1, 1)]
cmap = LinearSegmentedColormap.from_list('CustomBlue', colors, N=100)

# Create the table
table = ax.table(
    cellText=data,
    colLabels=['Category', 'SimplAI', 'Open-Source Tools'],
    loc='center',
    cellLoc='left',
    colWidths=[0.2, 0.4, 0.4],
)

# Style the table
table.auto_set_font_size(False)
table.set_fontsize(10)
table.scale(1, 1.5)

# Color the header row
for j in range(3):
    table[(0, j)].set_facecolor('#4472C4')
    table[(0, j)].set_text_props(color='white', fontweight='bold')

# Color alternating rows for better readability
for i in range(1, len(categories) + 1):
    for j in range(3):
        if i % 2 == 0:
            table[(i, j)].set_facecolor(cmap(0.3))
        else:
            table[(i, j)].set_facecolor(cmap(0.7))
            
# Add title
plt.suptitle('SimplAI vs Open-Source Automation Tools', fontsize=16, fontweight='bold', y=0.95)

# Save the figure
plt.tight_layout()
plt.savefig('/home/ubuntu/visualizations/comparison_table.png', dpi=300, bbox_inches='tight')
plt.close()

print("Comparison table visualization created successfully!")
